// auth.js
async function ensureAnonAuth() {
  const { data: { session } } = await window.sb.auth.getSession();

  if (!session) {
    const { data, error } = await window.sb.auth.signInAnonymously();
    if (error) throw error;
    localStorage.setItem(window.KEY_AUTH_UID, data.user.id);
    return data.user.id;
  }

  const uid = session.user.id;
  localStorage.setItem(window.KEY_AUTH_UID, uid);
  return uid;
}
