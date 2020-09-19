module.exports = {
    name:'youtube',
    description: "sends youtube link!",
    execute(message, args) {

        if(message.member.roles.cache.has('756857910109405315')){
            message.channel.send('https://www.youtube.com/channel/UCzlWkfV03c02Sv_kOW5a8KQ?view_as=subscriber');


        } else {
            message.channel.send('I see you dont have the correct permissions, let me change that :)');
            message.member.roles.add('756857910109405315');
        }
    
        
    }
}