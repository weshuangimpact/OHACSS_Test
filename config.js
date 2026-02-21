// config.js
// 目的：集中管理 全站共用設定 (資料庫、品牌資訊、頁面路徑)

const AppConfig = {
    // 1. 資料庫連線設定 (Supabase)
    Supabase: {
        URL: 'https://okvbtpyeenwmkmzkrxkk.supabase.co',
        KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rdmJ0cHllZW53bWttemtyeGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2MzQ4NDMsImV4cCI6MjA4NzIxMDg0M30._jTVmY0KfdRav28dO6sPW4mhPoV9n7nYBV7M-gjfOTs', 
        BUCKET_NAME: 'staging'
    },

    // 2. 系統品牌資訊
    System: {
        APP_NAME: 'OHACSS 職業健康評鑑與合規支援系統',
        COMPANY_NAME: '可信智慧整合有限公司',
        TAX_ID: '42917004',
        SLOGAN: 'WesmartAI , Making Trust Transparent.'
    },

    // 3. 核心頁面路徑對照 (相對路徑即可)
    Paths: {
        LOGIN: 'index.html',
        DASHBOARD: 'dashboard.html',
        RESET_PASSWORD: 'reset_password.html',
        INDEX: 'index.html'
    },

    // 4. Storage Keys
    StorageKeys: {
        USER_ID: 'currentUserId',
        USER_ROLE: 'currentUserRole',
        USER_NAME: 'currentUserName'
    }
};

window.AppConfig = AppConfig;
