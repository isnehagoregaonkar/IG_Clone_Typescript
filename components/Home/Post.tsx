import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';
import { Divider } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { POSTS } from '../../data/posts';

type PostProps = {
  post: any
}
type LikeProps = {
  likes: number
}
type CommentProps = {
  post: any
}

const Post = ({ post }: PostProps) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation='vertical' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post} />
    </View>
  )
}

const PostHeader = ({ post }: PostProps) => (
  <View style={{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center'
  }}>
    <View style={{
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <Image
        source={{ uri: post.profile_picture }}
        style={styles.story}
      />
      <Text style={{ color: '#fff', marginLeft: 5, fontWeight: '500' }}>{post.user}</Text>
    </View>
    <MaterialCommunityIcons name='dots-vertical' color='#fff' size={25} />
  </View>
);

const PostImage = ({ post }: PostProps) => (
  <View style={{
    width: '100%',
    height: 350
  }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={styles.postImage}
    />
  </View>
);

const PostFooter = ({ post }: PostProps) => (
  <View style={styles.footerView}>
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.leftFoooterIconContainer}>
        <LikeIcon />
        <CommentIcon />
        <ShareIcon />
      </View>
      <View style={styles.rightFooterIconContainer}>
        <SaveIcon />
      </View>
    </View>
    <Likes likes={post.likes} />
    <Caption post={post} />
    <CommentsSection post={post} />
    <Comments post={post} />
  </View>
);

const LikeIcon = () => (
  <TouchableOpacity>
    <AntDesign name='hearto' size={30} color={'#fff'} />
  </TouchableOpacity>
)

const CommentIcon = () => (
  <TouchableOpacity>
    <Ionicons name='chatbubble-outline' size={30} color={'#fff'} style={{
      transform: [{ rotate: '270deg' }]
    }} />
  </TouchableOpacity>
)

const ShareIcon = () => (
  <TouchableOpacity>
    <Feather name='send' size={30} color={'#fff'} />
  </TouchableOpacity>
)

const SaveIcon = () => (
  <TouchableOpacity>
    <Feather name='bookmark' size={30} color={'#fff'} />
  </TouchableOpacity>
)

const Likes = ({ likes }: LikeProps) => (
  <View style={styles.likesView}>
    <Text style={styles.likesText}>{likes.toLocaleString('en')} Likes</Text>
  </View>
)

const Caption = ({ post }: PostProps) => (
  <View style={{ marginTop: 5 }}>
    <Text style={styles.captionText}>
      <Text style={{ fontWeight: '600' }}>{post.user} </Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({ post }: PostProps) => (
  <View style={{ marginTop: 5 }}>
    {
      !!post.comments.length && (
        <Text style={{ color: 'gray' }}>
          View
          {post.comments.length > 1 ? ' all' : ''}
          {' ' + post.comments.length + ' '}
          {post.comments.length > 1 ? 'Comments' : 'Comment'}
        </Text>
      )
    }
  </View>
);

const Comments = ({ post }: PostProps) => (
  <>
    {
      post.comments.map((comment: {
        [x: string]: ReactNode; comment: any
      }, index: React.Key | null | undefined) => {
        return (
          <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={{ color: '#fff' }}>
              <Text style={{ fontWeight: '600' }}>{comment.user}</Text>
              {' '}{comment.comment}
            </Text>
          </View>
        )
      })
    }
  </>
)


export default Post;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501'
  },
  postImage: {
    height: '100%',
    resizeMode: 'cover',
  },
  footerView: {
    marginHorizontal: 15,
    marginTop: 10
  },
  footerIcon: {
    width: 33,
    height: 33
  },
  iconView: {
    flexDirection: 'row',
  },
  leftFoooterIconContainer: {
    flexDirection: 'row',
    width: '35%',
    justifyContent: 'space-between'
  },
  rightFooterIconContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  likesView: {
    flexDirection: 'row',
    marginTop: 4
  },
  likesText: {
    color: '#fff',
    fontWeight: '600'
  },
  captionText: {
    color: '#fff'
  }
})