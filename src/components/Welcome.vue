<template> 
<div class="jumbotron text-center">
    <h1>Welcome to the webpage of IE Bank Corp</h1>
    <p>Your trusted banking partner</p>

    <!-- The button that directs to the accounts page -->
    <b-button variant="primary" @click="$router.push('/accounts')">
      Go to Accounts
    </b-button>
</div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style scoped>
.jumbotron {
  margin-top: 20px;
}
</style>