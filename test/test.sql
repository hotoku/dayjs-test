#standardSQL
WITH
  temp1 AS (
    SELECT
      `dor-ds-sandbox.myfunc.myfunc`("2000-3-1") AS x
  )
SELECT
  x.orig,
  x.set0,
  x.set1,
  x.set2
FROM
  temp1;
