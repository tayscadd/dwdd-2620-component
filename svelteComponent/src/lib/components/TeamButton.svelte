<script>
    import BtnComponent from "$lib/components/BtnComponent.svelte";

    export let headerText = 'Header Text'
    export let descriptionText = `This is some description text, don't worry about it.`
    export let inputDefaultText = `Input text`
    let booleonFalse = false

    let h3_cls = `text-2xl font-bold leading-8 text-center`
    let p_cls = `text-base font-normal leading-6 text-center`
    let input_cls = `border w-[279px] h-12 gap-0 text-base font-normal leading-4 text-left pl-2 rounded-lg border-solid border-[#E3E5E5]`
    let container_cls = `w-[327px] h-[340px] gap-6 flex flex-col bg-[white] p-6 rounded-2xl`
    let text_container_cls = `flex flex-col gap-2`
</script>

<div class={container_cls}>
    <div class={text_container_cls}>
        <h3 class={h3_cls}>{headerText}</h3>
        <p class={p_cls}>{descriptionText}</p>
    </div>
    <input class={input_cls} type="text" placeholder={inputDefaultText}>
    <BtnComponent txt='Confirm' size='fill' />
    <BtnComponent txt='Cancel' size='fill' bg={booleonFalse}} />
</div>