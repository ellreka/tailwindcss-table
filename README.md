# @ellreka/tailwindcss-table

## Install

```bash
yarn add -D @ellreka/tailwindcss-table
```

tailwind.config.js

```javascript
plugins: [require('tailwindcss-table')]
```

## Usage

```javascript
variants: {
  extend: {
    textColor: ['th', 'td']
  }
}
```

## Example

```jsx
<table class="th:text-red-600 td:text-blue-600 ">
  <thead>
    <th>red-600</th>
  </thead>
  <tbody>
    <td>blue-600</td>
  </tbody>
</table>
```
