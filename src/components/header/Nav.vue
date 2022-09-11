<template>
    <div class="nav">
        <router-link to="/">
            <div> 主页 </div>
        </router-link>
        <router-link to="/transactions">
            <div> 交易 </div>
        </router-link>
        <router-link to="/blocks">
            <div> 区块 </div>
        </router-link>
        <router-link to="/user/0x77777778c7577dc7629e48dd0590cc48be0314b4">
            <div> 我的 </div>
        </router-link>
    </div>
</template>

<style scoped>
.header {
    line-height: 64px;
    display: flex;
    margin: 0 var(--margin-lr, 92px);
    align-items: center;
}

.nav {
    display: flex;
}

.nav a {
    color: gray;
}

.nav div {
    padding: 0 20px;
    border-bottom: solid 2px transparent;
}

.nav div:hover {
    color: black;
    font-weight: bold;
    border-bottom: solid 2px black;
}

.nav .router-link-active div {
    color: black;
    font-weight: bold;
}
</style>
