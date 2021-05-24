#standardSQL
CREATE OR REPLACE FUNCTION `{{ dataset }}.myfunc`(date Date)
RETURNS STRUCT< orig Date, set0 Date, set1 Date, set2 Date > LANGUAGE js AS """
{% include "myfunc.js" %}
return myfunc.myfunc(date);
""";
