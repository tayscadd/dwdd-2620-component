<script>
    import BtnComponent from '$lib/components/BtnComponent.svelte'
    import TeamButton from '$lib/components/TeamButton.svelte';
</script>

<style>
    body {
        min-width: 100%;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background-color: #090A0A;
        gap: 12px;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .assignmentContainers {
        border-radius: 12px;
        background-color: #858585;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    h1 {
        font-weight: 700;
    }
</style>

<body>
    <div>
        <div class='assignmentContainers'>
            <h1>Svelte Component 1</h1>
            <BtnComponent txt='Disabled Btn' size='lg' disabled=true/>
            <BtnComponent txt='Regular Btn' size='md'/>
            <BtnComponent txt='Btn w/o bg' size='sm' bg=false/>
        </div>
        <div class='assignmentContainers'>
            <h1>Svelte Component 2</h1>
            <TeamButton />
        </div>
    </div>
</body>