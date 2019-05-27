<template>
    <div class="logged-in">
        <label for="" class="label-name">{{ label }}</label>
        <span>
            <input type="text" class="the-input" :placeholder="placeholder">
        </span>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String
        }
    }
}
</script>


<style scoped>
.label-name {
   /* height: 100%; */
    width: 5rem;
    background: goldenrod;
    border: 1px solid  darkgray;
   /* border-radius: 3px; */
    font-family: 'Lobster', cursive;
    text-align: center;
    border-right: none;
}
.the-input {
     border: 1px solid  darkgray;
   /*   border-radius: 3px; */
      margin-left: -7px;
      height: 26px;
}
.logged-in {
    text-align: center;
    margin: 10px;
}


</style>

