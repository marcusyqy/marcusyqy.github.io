<script lang="ts">
    import Cpp from '../components/logos/cpp.svelte'
    export let percentage :number;
</script>

<div class="border">

    <div class="progress">
        <progress style="color:var(--teal);"min={0}, max={100} value={percentage}></progress>
    </div>
</div>


<style>

    .border {
        display:flex;
        border-style:solid;
        border-color:var(--teal);
        border-radius:20px;
        padding:10px;
        flex-direction:column;
        justify-content:center;
        text-align:center;
    }


    .progress {
        padding-left:2rem;
        padding-right:2rem;
        width:50%;
        vertical-align: middle;
    }

    progress {
        color:var(--teal);
        border:none;
        background:var(--grey);
        border-radius:20px;
        text-align:center;
    }

    progress::-moz-progress-bar {
        background:var(--teal);
    }

    progress::-webkit-progress-value {
        background:var(--grey);
    }

    progress::-webkit-progress-bar {
        background:var(--teal);
    }
</style>
