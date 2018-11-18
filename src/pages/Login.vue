<template>
    <div class="page">
        <div class="page-single">
            <div class="container">
                <div class="row">
                    <div class="col col-login mx-auto">
                        <form class="card" @submit.prevent="onSubmit">
                            <div class="card-body p-6">
                                <div class="card-title">Se connecter</div>
                                <div class="form-group">
                                    <label class="form-label">Adresse e-mail</label>
                                    <input type="text"
                                           class="form-control"
                                           :class="{'is-invalid': errors.has('email')}"
                                           name="email"
                                           v-model="user.login"
                                           v-validate="'required|email'"
                                           data-vv-delay="1000"
                                           placeholder="Enter email">
                                    <span class="invalid-feedback" v-show="errors.has('email')">
                                        {{ errors.first('email') }}
                                    </span>
                                </div>
                                <div class="form-footer">
                                    <button type="submit" class="btn btn-primary btn-block">Valider</button>
                                </div>
                            </div>
                        </form>
                        <div class="text-center text-muted">
                            Vous êtes nouveau ici ? <a href="#">Demandez de l'aide</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
        return {
            user: {
                login: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$validator.validate().then(result => {
                if (result) {
                    window.localStorage.setItem('auth_token', true);
                    this.$router.push({name: 'questionnaires'})
                }
            });
        }
    }
  }
</script>

<style scoped>

</style>