export const environment = {
  production: true,
  base_url: window["env"]["apiUrl"] || "http://localhost:9090",
  debug: window["env"]["debug"] || false
};