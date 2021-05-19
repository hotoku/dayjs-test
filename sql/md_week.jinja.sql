#standardSQL
CREATE OR REPLACE FUNCTION `{{ dataset }}.md_week`(date Date)
RETURNS int64 LANGUAGE js AS """
{% include "md_week.js" %}
return md_week.md_week(date);
""";
