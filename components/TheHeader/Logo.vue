<template>
    <div
    class="header-logo"
    :style="{ backgroundImage: 'url(' + require('@/assets/country-crop.jpg') + ')'}">
    <img 
        class="img-logo"
        src="@/assets/companyLogo.png" alt="logo"
    />
    </div>
</template>

<style>
.header-logo {
    background-position: center;
    background-size: cover;
}
.img-logo {
    width: 200px;
    height: 200px;
}
</style>

