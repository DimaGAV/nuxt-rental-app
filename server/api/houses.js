import houses from "@/data/houses.json";

export default defineEventHandler(() => {
  return houses || [];
});
