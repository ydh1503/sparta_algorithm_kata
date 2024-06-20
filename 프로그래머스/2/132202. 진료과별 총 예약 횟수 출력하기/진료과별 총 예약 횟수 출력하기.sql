SELECT MCDP_CD '진료과코드', count(APNT_NO) '5월예약건수'
FROM APPOINTMENT
WHERE APNT_YMD like ('2022-05%')
GROUP BY MCDP_CD
ORDER BY count(APNT_NO), MCDP_CD