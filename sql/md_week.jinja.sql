#standardSQL
CREATE OR REPLACE FUNCTION `{{ dataset }}.myfunc`(date Date)
RETURNS STRUCT< orig string, set0 string, set1 string, set2 string > LANGUAGE js AS """
{% include "myfunc.js" %}
return myfunc.myfunc(date);
""";
