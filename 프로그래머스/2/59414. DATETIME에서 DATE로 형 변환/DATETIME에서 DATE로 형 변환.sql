SELECT ANIMAL_ID, NAME, date_format(DATETIME, '%Y-%m-%d') as 날짜
FROM animal_ins
order by animal_id
