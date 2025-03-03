<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="inputMessage" placeholder="Enter a message" />
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      inputMessage: ''
    };
  },
  computed: {
    ...mapGetters(['getMessage']),
    message() {
      return this.getMessage;
    }
  },
  methods: {
    ...mapActions(['updateMessage']),
    updateMessage() {
      this.updateMessage(this.inputMessage);
    }
  }
};
</script>