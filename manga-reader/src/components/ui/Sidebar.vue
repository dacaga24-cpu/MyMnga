<template>
  <aside class="sidebar">
    <div class="sidebar-logo">
      <span class="logo-text">MYMNGA</span>
      <span class="logo-sub">THE SILENT CURATOR</span>
    </div>

    <nav class="sidebar-nav">
      <RouterLink to="/" class="nav-item" active-class="active">
        <span class="nav-icon">⌂</span>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/library" class="nav-item" active-class="active">
        <span class="nav-icon">📚</span>
        <span>Library</span>
      </RouterLink>
      <RouterLink to="/search" class="nav-item" active-class="active">
        <span class="nav-icon">⌕</span>
        <span>Search</span>
      </RouterLink>
    </nav>

    <div class="sidebar-footer">
      <button class="btn-start">START READING</button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 200px;
  min-width: 200px;
  background-color: #111111;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  border-right: 1px solid #1e1e1e;
}

.sidebar-logo {
  margin-bottom: 40px;
}

.logo-text {
  display: block;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #ffffff;
}

.logo-sub {
  display: block;
  font-size: 9px;
  letter-spacing: 1.5px;
  color: #555555;
  margin-top: 2px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 6px;
  color: #888888;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;
}

.nav-item:hover {
  color: #ffffff;
  background-color: #1a1a1a;
}

.nav-item.active {
  color: #ffffff;
  background-color: #1a1a1a;
  border-left: 3px solid #ff6b35;
}

.sidebar-footer {
  margin-top: auto;
}

.btn-start {
  width: 100%;
  padding: 12px;
  background-color: #ff6b35;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-start:hover {
  background-color: #e55a24;
}
</style>