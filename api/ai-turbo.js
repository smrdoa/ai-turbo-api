export default function handler(req, res) {
  const { fps, cpu, ram, internet } = req.query;

  // Verileri sayıya çevir
  const fpsNum = Number(fps);
  const cpuNum = Number(cpu);
  const ramNum = Number(ram);
  const netNum = Number(internet);

  // Basit bir AI karar algoritması
  const result = {
    cloudShare: Math.min(100, Math.round((100 - fpsNum) + (cpuNum * 0.5) + (100 - netNum))),
    deviceLoad: Math.max(0, 100 - Math.round((100 - fpsNum) + (cpuNum * 0.5))),
    warning: cpuNum > 90 || fpsNum < 30
  };

  res.status(200).json(result);
}
