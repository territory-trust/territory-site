// supabase-client.js

// ====== ВСТАВЬ СВОИ ДАННЫЕ ИЗ SUPABASE ======
const SUPABASE_URL = "https://gjhppixhqmpxvxyrqpqs.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_VndCYhTBUpjV70dABbntPg_K9mft5p8"; 

// Создаем глобальное подключение
window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

// Глобальные переменные, чтобы не путаться
window.KEY_AUTH_UID = "auth_uid";
window.KEY_MY_ID = "my_id";
window.KEY_REF_OWNER = "ref_owner";
