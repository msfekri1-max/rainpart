// config.js - تنظیمات سیستم GitHub Orders
const GITHUB_CONFIG = {
    owner: 'msfekri1-max',
    repo: 'rainpart',
    
    getToken: function() {
        return localStorage.getItem('github_token') || '';
    },
    
    saveToken: function(token) {
        if (token && (token.startsWith('ghp_') || token.startsWith('github_pat_'))) {
            localStorage.setItem('github_token', token);
            return true;
        }
        return false;
    },
    
    clearToken: function() {
        localStorage.removeItem('github_token');
    },
    
    isValidToken: function(token) {
        return token && (token.startsWith('ghp_') || token.startsWith('github_pat_'));
    }
};

if (typeof window !== 'undefined') {
    window.GITHUB_CONFIG = GITHUB_CONFIG;
}
