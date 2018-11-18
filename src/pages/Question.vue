<template>
    <layout>
         <div class="my-3 my-md-5">
        <div class="container">
            <div class="page-header">
                <h1 class="page-title">
                    Répondre à la question {{question.indexTheme}}.{{question.indexQuestion}}:
                </h1>
                <p class="form-control-plaintext">{{question.text}}</p>
            </div>
            <div class="row row-cards">
                <div class="col-lg-12">

                    <div class="card">
                        <fieldset class="form-fieldset">
                            <div class="form-group">
                                <label class="form-label">Réponse<span class="form-required">*</span></label>
                                <textarea v-model="answer"
                                          v-validate="'required'"
                                          data-vv-delay="1000"
                                          :class="{'is-invalid': errors.has('answer')}"
                                          name="answer"
                                          class="form-control answer-area"
                                          rows="6"
                                          placeholder="Votre réponse..."></textarea>
                                <span class="invalid-feedback" v-show="errors.has('answer')">
                                        {{ errors.first('answer') }}
                                </span>
                            </div>
                        </fieldset>
                        <div class="file-add_block">
                            <label class="form-label">Upload {{files.length ? 'more' : ''}} files:</label>
                            <div class="files-row">
                                <div class="file-preview" v-for="file in files">
                                    <i class="fe fe-x"
                                       @click="removeFile(file)"></i>
                                    <img :src="file.preview" alt="file.name" class="imagecheck-image">
                                </div>
                                <input v-show="false"
                                       @change="uploadFile"
                                       ref="fileInput"
                                       type="file"
                                       name="file">
                                <button class="btn btn-icon btn-primary btn-secondary add-file-btn"
                                        type="button"
                                        @click="uploadOpen">
                                    <i class="fe fe-plus"></i>
                                </button>
                            </div>

                        </div>

                    </div>
                    <div class="card text-right">
                        <div class="d-flex">
                            <button type="button" @click="reset" class="btn btn-link">Annuler</button>
                            <button type="button" @click="submit" class="btn btn-primary ml-auto">Répondre</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </layout>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Layout from '@/components/Layout'

  const DEFAULT_FILE_PREVIEW = 'https://i.onthe.io/shpzkl7v6jbafqlbb.701f6ad5.png'

  export default {
    name: 'question',
    components: {
      Layout,
    },
    data() {
      return {
        answer: '',
        files: [],
        questionId: this.$route.params.questionId
      }
    },
    created() {
      this.answer = this.question.answer ? this.question.answer.text : ''
      this.files = this.question.answer ? this.question.answer.files : []
    },
    computed: {
      ...mapGetters(['questionDetails']),
      question() {
        return this.questionDetails(this.questionId)
      }
    },
    methods: {
      uploadOpen() {
        this.$refs.fileInput.click()
      },
      uploadFile(e) {
        const input = e.target
        if (input.files && input.files[0]) {
          const reader = new FileReader()

          reader.onload = (e) => {
            const isImage = input.files[0].type.split('/')[0] === 'image'
            this.files.push({
              ...input.files[0],
              preview: isImage ? e.target.result : DEFAULT_FILE_PREVIEW,
            })
          }

          reader.readAsDataURL(input.files[0])
        }
      },
      reset() {
        this.answer = ''
        this.files = []
      },
      removeFile(file) {
        const index = this.files.indexOf(file)
        if (index > -1) {
          this.files.splice(index, 1);
        }
      },
      submit() {
        this.$validator.validate().then(result => {
          if (result) {
            this.$store.dispatch('onQuestionAnswered', {
              idQuestion: this.$route.params.questionId,
              text: this.answer,
              files: this.files,
            })
            this.$router.push({name: 'questionnaire'})
          }
        });
      }
    },
  }
</script>

<style scoped lang="scss">
    .answer-area {
        resize: none;
    }
    .file-add_block {
        padding: 0 1rem 1rem;
    }
    .files-row {
        display: flex;
    }
    .add-file-btn, .file-preview img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: 1px solid rgba(0, 40, 100, 0.12);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
    }
    .add-file-btn, .file-preview {
        margin: 5px;
    }
    .file-preview {
        position: relative;
        .fe-x {
            font-size: 12px;
            display: inline-block;
            position: absolute;
            z-index: 9;
            right: 0;
            top: 0;
            cursor: pointer;
        }
    }


</style>