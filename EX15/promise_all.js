// Task 2: Promise.all, Promise.race, Promise.allSettled and Promise.any
const delay = (ms, value, fail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (fail ? reject(new Error(value)) : resolve(value)), ms));

(async () => {
  const all = await Promise.all([delay(60, "A"), delay(30, "B"), delay(10, "C")]);
  console.log("all :", all);
  
  const race = await Promise.race([delay(80, "slow"), delay(20, "fast")]);
  console.log("race :", race);
  
  const settled = await Promise.allSettled([delay(10, "ok"), delay(20, "bad", true)]);
  console.log("allSettled:", settled.map((r) => r.status));
  
  const any = await Promise.any([delay(10, "first error", true), delay(30, "first success")]);
  console.log("any :", any);
  
  try {
    await Promise.all([delay(10, "fine"), delay(20, "one failed", true)]);
  } catch (error) {
    console.log("all rejects:", error.message);
  }
})();