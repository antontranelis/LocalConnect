
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Search, Phone, Video, MoreVertical, Smile, Paperclip } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  avatar: string;
  avatarImage?: string;
  online: boolean;
  type: 'direct' | 'group';
  members?: number;
}

const Messages = () => {
  const { toast } = useToast();
  const [selectedChat, setSelectedChat] = useState<Conversation | null>(null);
  const [messageText, setMessageText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const conversations: Conversation[] = [
    {
      id: 1,
      name: 'Anna M.',
      lastMessage: 'Ist das Fahrrad noch verfügbar?',
      timestamp: '2 Min.',
      unread: 2,
      avatar: 'AM',
      avatarImage: 'https://avatar.iran.liara.run/public/3',
      online: true,
      type: 'direct'
    },
    {
      id: 2,
      name: 'Nachbarschaftsgruppe',
      lastMessage: 'Max: Wer kommt zum Grillen?',
      timestamp: '15 Min.',
      unread: 5,
      avatar: 'NG',
      online: false,
      type: 'group',
      members: 12
    },
    {
      id: 3,
      name: 'Lisa S.',
      lastMessage: 'Danke für den schnellen Verkauf!',
      timestamp: '1 Std.',
      unread: 0,
      avatar: 'LS',
      online: true,
      type: 'direct'
    },
    {
      id: 4,
      name: 'Laufgruppe',
      lastMessage: 'Sarah: Treffen um 7 Uhr am Park',
      timestamp: '3 Std.',
      unread: 1,
      avatar: 'LG',
      online: false,
      type: 'group',
      members: 8
    },
    {
      id: 5,
      name: 'Tom B.',
      lastMessage: 'Können wir uns morgen treffen?',
      timestamp: '1 Tag',
      unread: 0,
      avatar: 'TB',
      online: false,
      type: 'direct'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Anna M.',
      content: 'Hallo! Ist das Mountainbike noch verfügbar?',
      timestamp: '14:30',
      sent: false
    },
    {
      id: 2,
      sender: 'Du',
      content: 'Ja, ist noch da! Möchtest du es dir ansehen?',
      timestamp: '14:32',
      sent: true
    },
    {
      id: 3,
      sender: 'Anna M.',
      content: 'Gerne! Wann passt es dir?',
      timestamp: '14:33',
      sent: false
    },
    {
      id: 4,
      sender: 'Du',
      content: 'Wie wäre es heute Abend um 18 Uhr?',
      timestamp: '14:35',
      sent: true
    },
    {
      id: 5,
      sender: 'Anna M.',
      content: 'Perfekt! Wo können wir uns treffen?',
      timestamp: '14:36',
      sent: false
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConversationClick = (conversation: Conversation) => {
    setSelectedChat(conversation);
    toast({
      title: `💬 Chat mit ${conversation.name}`,
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    toast({
      title: "📤 Nachricht senden",
      description: `"${messageText}" 🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀`
    });
    setMessageText('');
  };

  const handleCall = () => {
    toast({
      title: "📞 Anruf",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleVideoCall = () => {
    toast({
      title: "📹 Videoanruf",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  const handleAttachment = () => {
    toast({
      title: "📎 Anhang",
      description: "🚧 Diese Funktion ist noch nicht implementiert—aber keine Sorge! Du kannst sie in deinem nächsten Prompt anfordern! 🚀"
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="glass-effect border-white/20 h-full">
            <CardHeader>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Chats durchsuchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 glass-effect border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1 max-h-[400px] overflow-y-auto">
                {filteredConversations.map((conversation, index) => (
                  <motion.div
                    key={conversation.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`p-4 cursor-pointer transition-colors hover:bg-white/10 ${
                      selectedChat?.id === conversation.id ? 'bg-white/10' : ''
                    }`}
                    onClick={() => handleConversationClick(conversation)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          {conversation.avatarImage && (
                            <AvatarImage src={conversation.avatarImage} alt={conversation.name} />
                          )}
                          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                            {conversation.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-white font-medium text-sm truncate">
                            {conversation.name}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-400 text-xs">{conversation.timestamp}</span>
                            {conversation.unread > 0 && (
                              <Badge className="bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <p className="text-gray-400 text-xs truncate">
                            {conversation.lastMessage}
                          </p>
                          {conversation.type === 'group' && (
                            <Badge variant="outline" className="border-white/20 text-gray-400 text-xs">
                              {conversation.members} Mitglieder
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Chat Area */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <Card className="glass-effect border-white/20 h-full flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        {selectedChat.avatarImage && (
                          <AvatarImage src={selectedChat.avatarImage} alt={selectedChat.name} />
                        )}
                        <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                          {selectedChat.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-medium">{selectedChat.name}</h3>
                        <p className="text-gray-400 text-sm">
                          {selectedChat.online ? 'Online' : 'Zuletzt online vor 2 Std.'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCall}
                        className="text-white hover:bg-white/10"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleVideoCall}
                        className="text-white hover:bg-white/10"
                      >
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white hover:bg-white/10"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex ${message.sent ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`chat-bubble p-3 rounded-lg max-w-xs ${
                          message.sent ? 'sent' : 'received'
                        }`}>
                          <p className="text-white text-sm">{message.content}</p>
                          <p className="text-gray-300 text-xs mt-1">{message.timestamp}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                {/* Message Input */}
                <div className="p-4 border-t border-white/20">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleAttachment}
                      className="text-white hover:bg-white/10"
                    >
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Nachricht schreiben..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="glass-effect border-white/20 text-white placeholder:text-gray-400 pr-10"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10"
                      >
                        <Smile className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <Button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Wähle einen Chat</h3>
                  <p className="text-gray-400">Starte eine Unterhaltung mit deinen Freunden</p>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Messages;
