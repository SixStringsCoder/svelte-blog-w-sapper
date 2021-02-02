<script>
	// set up writable store for adding to database
	// set up readable store for adding Date time to each chat post
	// https://www.w3schools.com/howto/howto_css_chat.asp
	// https://www.w3schools.com/howto/howto_js_popup_chat.asp
	import { users } from './chatData.js';
	// import { messages } from './chatData.js';
	
	import MsgNinja from './MsgNinja.svelte';
	import MsgElf from './MsgElf.svelte';
	import ChatBoxNinja from './ChatBoxNinja.svelte';
	import ChatBoxElf from './ChatBoxElf.svelte';
	
	let msgViewer;
	let y;
	let chatMsgNinja = "";
	let chatMsgElf = "";
	// $:console.log(chatMsgNinja, chatMsgElf)
	
	
	const getTimeStamp = () => {
		let timeStamp = new Date().toString();
		return timeStamp;
		
	}
	
// 	dateTime.subscribe(time => {
// 		return timeDisplay = time
// 	})
	
	let messages = [
		{
			username: "Ninja",
			msg: "Hello. How are you today?",
			time: getTimeStamp()
		},
		{
			username: "Elf",
			msg: "Hey! I'm fine. Thanks for asking! And you, my friend?",
			time: getTimeStamp()
		}
	];
	// $:console.log(messages)
	
	const addMsg = (e, msg) => {
		//console.log(e.target)
		let newMsg = {
			username: e.target.id,
			msg: msg,
			time: getTimeStamp()
		}
		messages = [...messages, newMsg];
		clearInputs();
		msgViewer.scrollTop = msgViewer.scrollHeight;
		console.log(msgViewer.scrollTop, msgViewer.scrollHeight)
	}
	
	
	const clearInputs = () => {
		chatMsgNinja = "";
		chatMsgElf = "";
	}
	
</script>

<main>
	<section id="messages-cont" bind:this={msgViewer}>
		{#each messages as {username, msg}}
		  {#if username === "Ninja"}
				<MsgNinja displayedMsg={msg}
									time={getTimeStamp()} />
			{:else}
				<MsgElf displayedMsg={msg}
								 time={getTimeStamp()} />
			{/if}
		{/each}
	</section>
	
	<hr />
	
	<section id="inputs-cont">
		<h1>Chat</h1>
		<div>
			<ChatBoxNinja username={users[0].username}
							 			bind:chatMsgNinja
										on:submit={(e) => addMsg(e, chatMsgNinja)} />
			
			<ChatBoxElf username={users[1].username}
									bind:chatMsgElf
									on:submit={(e) => addMsg(e, chatMsgElf)} />	

		</div>	
	</section>
</main>

<style>
	main {
		width: 100%;
		padding: 3%;
/* 		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		background-color: #000;
	}
	
	section#messages-cont {
		height: 55vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: scroll;
	}
	
	h1 {
		width: 100vw;
		text-align: center;
		color: #FFF;
		margin: 10px 0;
	}
	
	section#inputs-cont {

	}
	
	div {
		display: flex;
		justify-content: space-around;
	}
</style>