'use client';

import { Conversation } from '../../types';
import PreviousChatItemComponent from '../previous-chat-item-component/previous-chat-item-component';
import styles from './previous-chat-list-component.module.css';

// Props for the PreviousChatListComponent component
type PreviousChatListComponentProps = {
  conversations: Conversation[];
  currentConversationId?: string;
  onConversationSelect: (conversationId: string) => void;
};

// function to render the PreviousChatListComponent component
export default function PreviousChatListComponent({
  conversations,
  currentConversationId,
  onConversationSelect
}: PreviousChatListComponentProps) {
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('he-IL', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={styles.conversationsList}>
      {conversations.length === 0 ? (
        <div className={styles.emptyState}>
          <p>אין שיחות קודמות</p>
          <p>התחל שיחה חדשה!</p>
        </div>
      ) : (
        // map over the conversations and render a PreviousChatItemComponent for each conversation
        conversations.map((conversation) => (
          <PreviousChatItemComponent
            key={conversation.id}
            conversation={conversation}
            isActive={currentConversationId === conversation.id}
            onSelect={() => onConversationSelect(conversation.id)}
            formatTimestamp={formatTimestamp}
          />
        ))
      )}
    </div>
  );
} 