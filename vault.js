function saveVaultData(key, value) {
  localStorage.setItem(key, value);
}

function retrieveVaultData(key) {
  return localStorage.getItem(key);
}
