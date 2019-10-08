public class world {

	private location[][] map;
	private int playerX;
	private int playerY;
	private int size;
	
	public world() {
		map = new location[1][1];
		map[0][0] = new location();
		playerX = 0;
		playerY = 0;
		size = 1;
	}
	public world(int siz) {
		size = siz;
		map = new location[size][size];
		makeMap();
		playerX = 0;
		playerY = 0;
	}
	
	public void makeMap() {
		character none = new character();
		vendor empty = new vendor();
		
		//first column
		String villageI = new String("Village Elder: Welcome to the village! Feel free to rest"
				+ "\n" + " here whenever you need to. We're all counting on you "
				+ "\n" + " to slay the dragon. It lives in the volcano to the"
				+ "\n" + " east of here. You'll need to head around through the"
				+ "\n" + " woods and swamp to the south to get there."
				+ "\n" + " Good luck!");
		vendor villageV = new vendor(5, "Armor Plating", true, 15, "Shiny Blade", true, 15, "New Buckler");
		map[0][0] = new location("Genesis Village", false, true, false, false, none, 0, villageI, true, villageV);
		character pixie = new character("Annoying Pixie", 10, 10, 5, 5, 3, 5, "Hehehe");
		String woodsI = new String("A passing stranger approaches you." 
				+ "\n" + "Stranger: Watch out for monsters in the wilds; they" 
				+ "\n" + " won't directly attack you, but they'll prevent."
				+ "\n" + " you from traveling in certain directions.");
		map[1][0] = new location("Whispering Woods", true, true, false, false, pixie, 2, woodsI, false, empty);
		character lizard = new character("Tough Lizard", 25, 12, 3, 5, 1, .2, "Szzssz");
		String swampI = new String("You find a strange hermit living here."
				+ "\n" + "Hermit: The lizards in this swamp are tough,"
				+ "\n" + " but their poisonous saliva could strengthen"
				+ "\n" + " your weapon.");
		map[2][0] = new location("Bubbling Swamp", true, true, true, false, lizard, 3, swampI, false, empty);
		String portI = new String("This port was clearly once a bustling trade center."
				+ "\n" + "As you stand on its weary docks, you can see it has become"
				+ "\n" + "delapidated and run down. Only a single ship is docked here."
				+ "\n" + "Its sail flutter in the breeze as if waiting for someone.");
		vendor portV = new vendor(5, "Brine Crust", true, 15, "Swashbuckling Cutlass", false, 0, "0");
		map[3][0] = new location("Port O'Call", true, false, false, false, none, 0, portI, true, portV);
		
		//second column
		String volcanoI = new String("From here you have a great view of the lands you have traveled through."
				+ "\n" + "From somewhere above, you hear a dragon's roar, shocking you out of your"
				+ "\n" + "reminiscence. You still have a job to do."
				+ "\n" + "Looking over to Genesis Village, you see a slope which could bring you back"
				+ "\n" + "there shortly, but it looks like a one-way trip down the mountain.");
		map[0][1] = new location("Raging Volcano", false, false, true, true, none, 0, volcanoI, false, empty);
		map[1][1] = new location("Mountain Crags", false, true, true, false, none, 0, "0", false, empty);
		String shoreI = new String("You think this would be a beautiful place to rest and watch the sunset."
				+ "\n" + "As you contemplate you quest , a small crab snips at your foot and"
				+ "\n" + "scuttles into a nearby cave to the east.");
		map[2][1] = new location("Sandy Shore", true, false, true, true, none, 0, shoreI, false, empty);
		map[3][1] = new location("Deep Blue Ocean", false, false, true, true, none, 0, "0", false, empty);
		
		//third column 
		String streamI = new String("You find a water nymph bathing in the stream."
				+ "\n" + "She seems scared but you approach her calmly."
				+ "\n" + "Nymph: I see you are weary from your travels. Feel free"
				+ "\n" + " to rest by my stream. The water is calm, refreshing, and"
				+ "\n" + " clean. You are on a quest on great importance. Take my"
				+ "\n" + " blessing so that you will succeed.");
		vendor streamV = new vendor(3, "Nymph's Blessing", false, 0, "0", true, 15, "Wake Shield");
		map[0][2] = new location("Calm Stream", false, true, false, true, none, 0, streamI, true, streamV);
		character necro = new character("Ravenous Necromancer", 30, 20, 2, 10, 3, 10, "Don't disturb my research.");
		String graveI = new String("You hear a digging noise coming from the east of the"
				+ "\n" + "cemetary. You see a ragged man furiously trying"
				+ "\n" + "to uncover a body. He looks at you with madness"
				+ "\n" + "in his eyes. You think it is best not to"
				+ "\n" + "try to talk to him.");
		map[1][2] = new location("Defiled Graveyard", true, false, false, true, necro, 1, graveI, false, empty);
		character gCrab = new character("Giant Crab", 45, 20, 8, 5, 0, 0, "*Snip-snip* *skittle*");
		String bCaveI = new String("The cave is filled with various boat wreckages. Everything is covered"
				+ "\n" + "in crabs and almost nothing is salvageable.");
		map[2][2] = new location("Large Beach Cave", false, false, true, true, gCrab, 4, bCaveI, false, empty);
		
		//fourth column
		map[0][3] = new location("Cave Mouth", false, true, false, true, none, 0, "0", false, empty);
		String pirateI = new String("An almost wholly intact ship rests before you, beached for eternity."
				+ "\n" + "As you watch the ship, you hear someone crying out orders and lights"
				+ "\n" + "dancing along the main deck. Clearly something is still on there.");
		vendor pirateV = new vendor(5, "Undying Curse", true, 15, "Cursed Cutlass", true, 15, "Mostly Ghostly Shield");
		map[1][3] = new location("Pirate Wreck", true, true, false, false, none, 0, pirateI, true, pirateV);
		character slime = new character("Glowing Slime", 20, 9, 17, 10, 3, 5, "*Wibble-Wobble*");
		String slimeI = new String("The glowing slime here seems to surge and pulse with almost"
				+ "\n" + "lifelike quality.");
		map[2][3] = new location("Glowing Slime Cave", true, false, false, true, slime, 1, slimeI, false, empty);
		
		//giant's cave
		character giant = new character("Talkative Giant", 50, 15, 20, 5, 2, .2, "0");
		String hillI = new String("Giant: I keep all my treasure in the cave to the east."
				+ "\n" + " But I'm not letting you in. You can't have any.");
		map[size-1][size-2] = new location("Giant's Hillock", false, false, true, true, giant, 3, hillI, false, empty);
		map[size-1][size-1] = new location("Giant's Cave", false, false, false, true, none, 0, "0", false, empty);
	}
	
	public location move(int moveDir, location start) {
		if(moveDir ==  1) {
			if(playerY == 0) {
				System.out.println("You cannot move that way.");
			}
			else {
				playerY--;
				return getLocation(playerX, playerY);
			}
		}
		else if(moveDir ==  2) {
			if(playerY == size-1) {
				System.out.println("You cannot move that way.");
			}
			else {
				playerY++;
				return getLocation(playerX, playerY);
			}
		}
		else if(moveDir ==  4) {
			if(playerX == 0) {
				System.out.println("You cannot move that way.");
			}
			else {
				playerX--;
				return getLocation(playerX, playerY);
			}
		}
		else if(moveDir ==  3) {
			if(playerX == size-1) {
				System.out.println("You cannot move that way.");
			}
			else {
				playerX++;
				return getLocation(playerX, playerY);
			}
		}
		return start;
	}
	
	public int getPlayerX() {
		return playerX;
	}
	public int getPlayerY() {
		return playerY;
	}
	public location getLocation(int Xcoor, int Ycoor) {
		return map[Ycoor][Xcoor];
	}
}
