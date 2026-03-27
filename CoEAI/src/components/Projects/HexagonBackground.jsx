import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styles from "./HexagonBackground.module.css";

export default function HexagonBackground({
  hexagonSize = 60,
  hexagonMargin = 2,
  glowColor = "rgba(0, 240, 255, 0.4)",
  borderColor = "rgba(255, 255, 255, 0.05)"
}) {
  const containerRef = useRef(null);
  const [grid, setGrid] = useState({ rows: 0, cols: 0, scale: 1 });

  const hexWidth = hexagonSize;
  const hexHeight = hexagonSize * 1.15;
  const rowSpacing = hexagonSize * 0.86;

  const updateGrid = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();
    const scale = Math.max(1, Math.min(width, height) / 800);
    const scaledSize = hexagonSize * scale;

    const cols = Math.ceil(width / scaledSize) + 2;
    const rows = Math.ceil(height / (scaledSize * 0.86)) + 2;

    setGrid({ rows, cols, scale });
  }, [hexagonSize]);

  useEffect(() => {
    updateGrid();
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(updateGrid);
    ro.observe(container);
    return () => ro.disconnect();
  }, [updateGrid]);

  const scaledHexWidth = hexWidth * grid.scale;
  const scaledHexHeight = hexHeight * grid.scale;
  const scaledRowSpacing = rowSpacing * grid.scale;
  const scaledMargin = hexagonMargin * grid.scale;

  // Memoize style configuration
  const hexagonStyle = useMemo(
    () => ({
      width: scaledHexWidth,
      height: scaledHexHeight,
      "--glow-color": glowColor,
      "--border-color": borderColor,
      "--margin": `${scaledMargin}px`,
    }),
    [scaledHexWidth, scaledHexHeight, scaledMargin, glowColor, borderColor]
  );

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Hexagon Grid */}
      <div className={styles.gridLayer}>
        {Array.from({ length: grid.rows }).map((_, rowIndex) => {
          const isOddRow = rowIndex % 2 === 1;
          const marginLeft = isOddRow ? -(scaledHexWidth / 2) + scaledMargin : scaledMargin;

          return (
            <div
              key={rowIndex}
              className={styles.row}
              style={{
                marginTop: rowIndex === 0 ? -scaledHexHeight * 0.25 : -scaledRowSpacing * 0.16,
                marginLeft: marginLeft - scaledHexWidth * 0.1,
              }}
            >
              {Array.from({ length: grid.cols }).map((_, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={styles.hexagon}
                  style={hexagonStyle}
                />
              ))}
            </div>
          );
        })}
      </div>

      {/* Ambient Glow */}
      <div
        className={styles.ambientGlow}
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${glowColor.replace("0.4", "0.08")} 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 80%, ${glowColor.replace("0.4", "0.08")} 0%, transparent 50%)`,
        }}
      />

      {/* Edge Vignette */}
      <div className={styles.vignette} />
    </div>
  );
}
