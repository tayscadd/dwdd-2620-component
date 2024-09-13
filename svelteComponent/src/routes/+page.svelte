<script>
    import BtnComponent from '$lib/components/BtnComponent.svelte'
</script>

<style>
    body {
        min-width: 100%;
        min-height: 100vh;
        display: grid;
        place-items: center;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>

<body>
    <div>
        <BtnComponent size='lg' disabled=true/>
    </div>
</body>