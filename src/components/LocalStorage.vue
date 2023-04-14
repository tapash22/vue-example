<template>
    <div class="local-storage">
        <input v-model="name" class="rounded-lg border-2 bg-transparent text-sm font-medium p-2" />
        <div>
            <button class="btn btn-primary" data-bs-target="#collapseTarget" data-bs-toggle="collapse">
                Bootstrap collapse
            </button>
            <h3>
                Fancy display heading
                <small class="text-muted">With faded secondary text</small>
            </h3>
            <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
        

            <figure class="text-center">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            name: '',
        }
    },
    watch: {
        name(newName) {
            localStorage.name = newName;
        }
    },

    mounted() {
        if (localStorage.name) {
            this.name = localStorage.name;
        }
    }

}
</script>

<style></style>