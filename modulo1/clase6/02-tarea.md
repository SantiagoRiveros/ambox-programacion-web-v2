# Tarea — Responsive con CSS

Crear una página sencilla sobre **un restaurante**.

## HTML

La página debe tener:

- Un título: "Mi Restaurante"
- Un menú con 3 opciones:
  - Inicio
  - Menú
  - Contacto

- Una sección con una imagen y un texto.
- 3 tarjetas con comidas.

## CSS

### Desktop

Las 3 tarjetas deben aparecer una al lado de la otra:

```text
┌────────┐ ┌────────┐ ┌────────┐
│ Pizza  │ │ Pasta  │ │ Sushi  │
└────────┘ └────────┘ └────────┘
```

### Mobile

Crear:

```css
@media (max-width: 768px) {
}
```

Y conseguir que las tarjetas aparezcan una debajo de otra:

```text
┌────────────┐
│   Pizza    │
└────────────┘

┌────────────┐
│   Pasta    │
└────────────┘

┌────────────┐
│   Sushi    │
└────────────┘
```

También hacer que la sección de **imagen + texto** pase de:

```text
IMAGEN | TEXTO
```

a:

```text
IMAGEN
TEXTO
```

## Extra

Agregar un efecto `hover` a las tarjetas utilizando:

```css
transition
```

y:

```css
transform
```

Por ejemplo, hacer que la tarjeta se levante un poquito al pasar el mouse.

## Objetivo

Practicar:

- `display: flex`
- `flex-direction`
- `width`
- `max-width`
- `@media`
- `transition`
- `transform`
- `:hover`
