SELECT sub.ANIMAL_TYPE, sub.count
FROM (SELECT ANIMAL_TYPE, count(ANIMAL_ID) as count
     FROM ANIMAL_INS
     GROUP BY ANIMAL_TYPE) sub
WHERE lower(sub.ANIMAL_TYPE) = 'cat' or lower(sub.ANIMAL_TYPE) = 'dog'
ORDER BY sub.ANIMAL_TYPE
