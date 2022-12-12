# Tarjeta de crédito válida

## Índice

* [1. Descripción](#1-descripción)
* [2. Hitos cumplidos](#2-hitos-cumplidos)

***
## 1. Descripción

Esta página simula la sección del sitio oficial de Netflix en la que se valida el método de pago, para lo cual se debe ingresar el nombre completo del titular de la tarjeta, el número de la tarjeta, la fecha de vencimiento y el código de seguridad.
Los principales usuarios de la página son adolescentes y adultos que puedan contratar el sevicio de netflix y tengan una tarjeta de crédito o débito que les permita pagar por el servicio.
El único objetivo de los usuarios con relación a esta página es ingresar un método de pago para poder disfrutar del servicio que ofrecee la plataforma de Netflix.

El recuadro (input) en el que debe ingresarse el número de la tarjeta permite máximo 16 caractéres, y no permite avanzar si queda en blanco; además de que no permite ingresar letras y solo acepta dígitos (0-9).
La página requiere que todos los campos sean llenados y no te permite continuar si algún campo queda vacío, después de llenar todo lo solicitado, al dar click en el botón "guardar" se ejecuta el algoritmo de Luhn y si el número de tarjeta ingresado es válido, en la parte inferior de la pantalla se muestra un mensaje que dice "tarjeta válida", en caso contrario de que el número de tarjeta ingresado sea inválido se mostrará un mensaje que dice "lo sentimos, tu tarjeta no es válida".
Cada paso a seguir para implementar el algoritmo de Luhn se ejecuta en la consola de la página para que el usuario no vea todo el proceso, y solo se le muestre el resultado de la validación.
Los hipervínculos creados en la sección "cerrar sesión" ubicada en la esquina superior derecha, y en la sección "cambiar forma de pago" son ilustrativos, es decir, no te redirigen a otra página, fueron diseñados para que el simulador se vea más real.

## 2. Hitos cumplidos

* Insertar un número (txt) a validar. Solo acepta caracteres numéricos del 0-9 (dígitos).
* Muestra si el resultado es válido o inválido.
* Se ocultan todos los números de la tarjeta, a excepción de los últimos 4 caracteres.
* No se puede ingresar un campo vacío.