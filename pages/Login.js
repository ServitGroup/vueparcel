export default {
    template: `<main class="pa4 black-80">
  <form class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input v-model="email" class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address">
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input v-model="password" class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password">
      </div>
      <label class="pa0 ma0 lh-copy f6 pointer">
      <input type="checkbox"> Remember me</label>
    </fieldset>
    <div class="">
      
    <input @click="login" class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in">
    </div>
    <div class="lh-copy mt3">
      <a href="#0" class="f6 link dim black db" >Sign up</a>
      <a href="#0" class="f6 link dim black db">Forgot your password?</a>
    </div>
  </form>
</main>`,
    name: "Login",
    mixins: [],
    data() {
        return {
            theme: "AdminLte",
            email: "",
            password: ""
        };
    },
    created() {
        window.vc = this;
        console.log("vc computer is created");
    },
    mounted() {},
    methods: {
        login() {
            console.log(this.email, this.password);
            this.$store.dispatch("user/login", {
                email: this.email,
                password: this.password
            });
        }
    },
    computed: {}
};