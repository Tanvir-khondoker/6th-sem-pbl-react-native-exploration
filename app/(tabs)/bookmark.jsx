import { Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView className="flex-1 px-4 my-6 bg-primary">
      <View className="bg-primary rounded-lg shadow-md p-6">
        <Text className="text-3xl text-white font-semibold mb-4">Your Bookmarked Videos</Text>
        
        <Image
          source={{ uri: 'https://via.placeholder.com/300x150?text=Video+Thumbnail' }} // Replace with your video thumbnail URL
          className="mb-4 rounded-lg"
          style={{ width: '100%', height: 150 }} // Adjust height as necessary
        />
        
        <Text className="text-white mb-4">
          You have bookmarked videos that you can easily access anytime. Keep track of your favorite content and revisit it whenever you want.
        </Text>
        
        <Text className="text-white mb-4">
          Benefits of Bookmarking:
        </Text>
        
        <View className="mb-4">
          <Text className="text-white">• Quick access to your favorite videos</Text>
          <Text className="text-white">• Save videos for offline viewing</Text>
          <Text className="text-white">• Share bookmarks with friends</Text>
        </View>
        
        <TouchableOpacity className="bg-white rounded-md px-4 py-2">
          <Text className="text-primary text-center font-semibold">View Your Bookmarks</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
