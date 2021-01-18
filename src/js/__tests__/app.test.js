import checkHealthStatus from '../app';

test('should be healthy status', () => {
  const healthStatus = checkHealthStatus({ name: 'Dima', health: 75 });
  expect(healthStatus).toBe('healthy');
});

test('should be wounded status', () => {
  const healthStatus = checkHealthStatus({ name: 'Dima', health: 34 });
  expect(healthStatus).toBe('wounded');
});

test('should be critical status', () => {
  const healthStatus = checkHealthStatus({ name: 'Dima', health: 4 });
  expect(healthStatus).toBe('critical');
});
