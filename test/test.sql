#standardSQL
WITH
  temp1 AS (
    SELECT
      ARRAY[3 * x, 3 * x + 1, 3 * x + 2] AS x
    FROM
      UNNEST(ARRAY[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) AS x
  ),
  temp2 AS (
    SELECT
      2000 + y AS year
    FROM
      temp1
      CROSS JOIN
      UNNEST(temp1.x) AS y
  )
SELECT
  year,
  `md_week.md_week`(date(year, 3, 1))
FROM
  temp2;
