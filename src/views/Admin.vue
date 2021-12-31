<template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input
            type="text"
            placeholder="Enter user email to make them an admin"
            id="addAdmins"
            v-model="adminEmail"
          />
        </div>
        <span> {{ this.functionMsg }} </span>
        <button @click="staticErrorMsg" class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Admin",
    data(){
        return {
            adminEmal: "",
            functionMsg: "",
        }
    },
    methods: {
        staticErrorMsg() {
            if (this.functionMsg === "") {
            this.functionMsg = "You must enter an e-mail address"
            }else {this.functionMsg = "You are not authorized to do this!"}
     
        }
    }
};
</script>

<style lang="scss" scoped>
.admin {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }
    .admin-info {
      border-radius: 8px;
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;

      span {
        font-size: 14px;
        color: red;
      }
      .input {
        margin: 16px 0;

        label {
          font-size: 14px;
          display: block;
          padding-bottom: 6px;
        }
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 8px;
          height: 50px;
          @media (min-width: 900px) {
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        align-self: center;
      }
    }
  }
}
</style>