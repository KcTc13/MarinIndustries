import { test, expect } from '@playwright/test';
import { performance } from 'node:perf_hooks';

const URL_TIENDA = 'https://marin-industries.vercel.app/tienda';
const LIMITE_MS = 200;

test('C4: tiempo de respuesta al agregar un producto al carrito', async ({ page }) => {
  await page.goto(URL_TIENDA);

  const botonAgregar = page
    .locator('.productos-grid .producto-acciones .btn-primary:enabled')
    .first();

  const contador = page.locator('.tienda-carrito-cantidad');

  await expect(botonAgregar).toBeVisible();
  await expect(botonAgregar).toBeEnabled();
  await expect(contador).toBeVisible();

  const cantidadInicial = Number((await contador.innerText()).trim());

  expect(Number.isFinite(cantidadInicial)).toBe(true);

  const inicio = performance.now();

  await botonAgregar.click();

  await expect(contador).toHaveText(String(cantidadInicial + 1));

  const tiempoMs = performance.now() - inicio;

  console.log(`C4 | Tiempo de respuesta: ${tiempoMs.toFixed(2)} ms`);
  console.log(`C4 | Límite establecido: ${LIMITE_MS} ms`);

  expect(
    tiempoMs,
    `La interacción superó el límite de ${LIMITE_MS} ms`
  ).toBeLessThanOrEqual(LIMITE_MS);
});
