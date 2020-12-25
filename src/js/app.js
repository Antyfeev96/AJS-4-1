// eslint-disable-next-line consistent-return
export default function checkHealthStatus({ health }) {
  if (health > 50) {
    return 'healthy';
  }
  if (health <= 50 && health >= 15) {
    return 'wounded';
  }
  if (health < 15) {
    return 'critical';
  }
  // Тест показывает, что 100% строк покрыто и одновременно с этим 9 строка не покрыта, странно)
}
