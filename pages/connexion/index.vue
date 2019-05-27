<template>
<div class="to-log">
    <Login 
        label="e-mail"
        placeholder="example@google.com"
    />
     <Login 
        label="Password"
        placeholder="enter password"
    />
</div>
</template>

<script>

import Login from '~/components/Login/Login'

export default {
    components: {
        Login
    }
}
</script>

<style>
.to-log {
    height: 100%;
    width: 35rem;
    border: 1px solid rgb(9, 59, 57);
    border-radius: 3px;
    margin: 254px;
    padding: 20px;
}

</style>

