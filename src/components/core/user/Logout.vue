<script>
import requester from "../../../requester.js";

export default {
  name: "Logout",
  mixins: [ requester ],
  methods: {
    userLogout() {
      this.post("_logout", "user", "Kinvey")
        .then(this.handler)
        .then(() => {
          sessionStorage.clear();

          console.log('logout');
        });
    }
  }
};
</script>

