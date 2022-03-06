--Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

--film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
SELECT COUNT(*) FROM film
where length >(SELECT AVG(length) FROM film) -- 489


--film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
SELECT COUNT(*) FROM film
where rental_rate =(SELECT MAX(rental_rate) FROM film) --336


--film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
SELECT title FROM film
where rental_rate =
(SELECT MIN(rental_rate) FROM film)
AND 
replacement_cost=(SELECT MIN(replacement_cost) FROM film)

--payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.

SELECT payment.customer_id, first_name, last_name, COUNT(payment.customer_id)  payment_count FROM customer
   LEFT JOIN payment ON payment.customer_id = customer.customer_id
   GROUP BY payment.customer_id, customer.first_name, customer.last_name
   ORDER BY payment_count DESC;