import java.util.Scanner;

public class testRun {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println("Start task.");
		
		Scanner in = new Scanner(System.in);
		String response = "0";
		
		//intro
		System.out.println("Welcome to your adventure! What is your name?");
		System.out.println("*Type your responses under each prompt and use ENTER to sumbit them*"
				+ "\n" + "*Please avoid any extra characters such as spaces*");
		String name = in.nextLine();
		System.out.println();
		System.out.println("Welcome " + name + "!");
		System.out.println("Please pick a backstory from the following:"
				+ "\n" + "1. Royal Knight"
				+ "\n" + "2. Wandering Mercenary"
				+ "\n" + "3. Cunning Rogue"
				+ "\n" + "4. Perceptive Ranger");
		response = in.nextLine();
		System.out.println();
		playerC playerCh = new playerC();
		if(response.compareTo("1") == 0){
			playerCh = new playerC(name, 35, 5, 10, 20);
			System.out.println("You are a brave knight who has been tasked with"
					+ "\n" + "slaying a dragon which has been terrorizing a"
					+ "\n" + "nearby village. The king himself personally"
					+ "\n" + "oversaw your departure."
					+ "\n" + "After a long day of traveling, you arrive"
					+ "\n" + "in the village just as the sun is setting."
					+ "\n" + "However, you are surprised to see the"
					+ "\n" + "village is still well lit. An elderly"
					+ "\n" + "gentleman approaches you.");
			System.out.println("*Press ENTER to continue*");
			in.nextLine();
			System.out.println("Elder: Greetings, " + playerCh.getName() + "!"
					+ "\n" + " We received a letter about your arrival."
					+ "\n" + " The whole village came together to prepare"
					+ "\n" + " a feast for your arrival. Please enjoy."
					+ "\n" + "As you wander through the festival, many of"
					+ "\n" + "the villagers come up to you and thank"
					+ "\n" + "you for coming to help them.");
		}
		else if(response.compareTo("2") == 0) {
			playerCh = new playerC(name, 30, 7, 7, 15);
			System.out.println("As you travel across the countryside, you hear"
					+ "\n" + "rumors of a village which has been terrorized"
					+ "\n" + "by a dragon. Believing you could lend a hand,"
					+ "\n" + "you set off for the village."
					+ "\n" + "When you arrive, you immediately seek out the elder."
					+ "\n" + "Elder: " + playerCh.getName() + " you say? Well, we could certainly"
					+ "\n" + " use the help. You must have traveled far to get"
					+ "\n" + " here. Please celebrate with us tonight. We shall"
					+ "\n" + " have a feast in honor of your arrival.");
		}
		else if(response.compareTo("3") == 0) {
			playerCh = new playerC(name, 25, 10, 5, 18);
			System.out.println("As you slip out of the back of the last wagon"
					+ "\n" + "in the train, you take a look at some of the goods"
					+ "\n" + "you just heisted. Some gold pieces, a fancy"
					+ "\n" + "looking dagger, and a letter addressed to the"
					+ "\n" + "royal seat. You break it open."
					+ "\n" + playerCh.getName() + ": I hope it's a land deed. I really"
					+ "\n" + " need a new place to live."
					+ "\n" + "The letter contains a plea for help. Apparently,"
					+ "\n" + "the convoy you just stole from is headed to the"
					+ "\n" + "capital to ask the king to send his knight to rid"
					+ "\n" + "the village of a dragon.");
			System.out.println("*Press ENTER to continue*");
			in.nextLine();
			System.out.println(playerCh.getName() + ": Dragons usually have treasure hoards."
					+ "\n" + " Plus, these guys seem pretty desperate. They are"
					+ "\n" + " probably paying well. Sounds like a job for me."
					+ "\n" + "You head to the village and meet the elder under"
					+ "\n" + "the guise of help from the capital."
					+ "\n" + "Elder: " + playerCh.getName() + " we are glad you came so quickly."
					+ "\n" + " The village is putting together a feast to celebrate"
					+ "\n" + " your arrival, enjoy yourself before you get to work.");
		}
		else {
			playerCh = new playerC(name, 35, 7, 10, 2);
			System.out.println("As you kneel down to examine the deer tracks, you notice"
					+ "\n" + "scorch marks on nearby rocks and large couges"
					+ "\n" + "ripped out of the earth. Only one creature hunts"
					+ "\n" + "this way: a dragon. You depart for a nearby village"
					+ "\n" + "to talk to the elder and acquire some information."
					+ "\n" + "Elder: " + playerCh.getName() + " you say? Well, we could certainly"
					+ "\n" + " use the help. You must have traveled far to get"
					+ "\n" + " here. Please celebrate with us tonight. We shall"
					+ "\n" + " have a feast in honor of your arrival.");
		}
		System.out.println();
		
		//festival intro
		System.out.println("As the feast begins, you have the opportunity to try some"
				+ "\n" + "different foods. Please choose an appetiser:"
				+ "\n" + "1. Dumplings"
				+ "\n" + "2. Jalepeno Poppers"
				+ "\n" + "3. Nut Mix");
		response = in.nextLine();
		if(response.compareTo("1") == 0){
			System.out.println("The dumplings are doughy and filling.");
			playerCh.buffHP(5);
		}
		else if(response.compareTo("2") == 0) {
			System.out.println("The spice is perfectly offset by the sweet.");
			playerCh.buffAtt(.2);
		}
		else {
			System.out.println("The crunchy mix is filled with nutrients.");
			playerCh.buffDef(.2);
		}
		System.out.println();
		System.out.println("The main course comes around:"
				+ "\n" + "1. Hearty Chowder"
				+ "\n" + "2. Chicken Curry"
				+ "\n" + "3. Vegetable Stew");
		response = in.nextLine();
		if(response.compareTo("1") == 0){
			System.out.println("The thick chowder is very tasty.");
			playerCh.buffHP(10);
		}
		else if(response.compareTo("2") == 0) {
			System.out.println("The blend of spices makes a powerful taste.");
			playerCh.buffAtt(.2);
		}
		else {
			System.out.println("You feel the healthy stew strengthen your resolve.");
			playerCh.buffDef(.2);
		}
		System.out.println();
		System.out.println("Finally, dessert:"
				+ "\n" + "1. Chocolate Cake"
				+ "\n" + "2. Cinnamon-spiced Cocoa"
				+ "\n" + "3. An Orange");
		response = in.nextLine();
		if(response.compareTo("1") == 0){
			System.out.println("The rich chocolate melts in your mouth.");
			playerCh.buffHP(5);
		}
		else if(response.compareTo("2") == 0) {
			System.out.println("The amazing taste is almost matched by the aroma.");
			playerCh.buffAtt(.2);
		}
		else {
			System.out.println("The citrus flavor complements the rest of your meal.");
			playerCh.buffDef(.2);
		}
		playerCh.setHP(playerCh.getMaxHP());
		
		//end game setup
		character boss = new character("Dragon", 150, 20, 13, 45, 3, 15, "Graaaawwww");
		location battleground = new location();
		int result = 0;
		
		//create world
		int size = 4;
		world map = new world(size);
		location place = map.getLocation(map.getPlayerX(), map.getPlayerY());
		boolean treasureG = true;
		boolean treasureP = true;
		character pirateC = new character("Ghost Pirate Captain", 40, 15, 15, 50, 1, .2, "Oooooowoowowo Arrrgggg");
		character stoneEle = new character("Stone Elemental", 35, 8, 25, 25, 2, .2, "*stone crumbles*");
		boolean bless = false;
		
		//main game loop
		int choice = 0;
		while(true) {
			choice = place.choices(playerCh);
			if(choice == -1) {
				System.out.println("You have fallen on your journey. Better luck next time.");
				break;
			}
			map.move(choice, place);
			//beach cave
			if(map.getPlayerX() == 1 && map.getPlayerY() == 2) {
				System.out.println("You feel a cold breeze blowing out of the cave to the east."
						+ "\n" + "There might be something big in there. You best be"
						+ "\n" + "prepared for the worst.");
			}
			if(map.getPlayerX() == 3 & map.getPlayerY() == 1 && treasureP) {
				System.out.println("As you walk through the dark cave, you come upon a beached pirate ship. "
						+ "\n" + "The deck glows brightly, perhaps from treasure or perhaps from Ghost Pirates."
						+ "\n" + "You manage to board the ship and find the deck covered in gold."
						+ "\n" + "However, the ghostly crew coverges on you. The captain challenges"
						+ "\n" + "you to a duel for all the gold. y/n");
				response = in.nextLine();
				if(response.compareTo("y") == 0) {
					result = battleground.fight(playerCh, pirateC);
					if(result == 1) {
						System.out.println("Captain: Quite impressive, " + playerCh.getName()
								+ "\n" + " Our gold is yours. We still have some special items"
								+ "\n" + " for sale.");
						treasureP = false;
					}
					else if(result == 0) {
						System.out.println("You flee the spooky pirates.");
					}
					else if(result == -1) {
						System.out.println("You have fallen on your journey. Better luck next time.");
						break;
					}
				}
			}
			//port quest
			if(map.getPlayerX() == 0 && map.getPlayerY() == 3) {
				if(playerCh.getQuestP() == 0) {
					System.out.println("\n" + "As you enter the desolate port, a downtrodden deckhand approaches you."
							+ "\n" + "Sailor: Please, you must help us! Even since our captain went missing,"
							+ "\n" + " we've been unable to leave this port. If you bring her back to us,"
							+ "\n" + " I'm sure she'd let you accompany us across the sea. Last I heard,"
							+ "\n" + " she was headed towards a place called the 'Mountain Crags'.");
					playerCh.questProgressP();
				}
				else if(playerCh.getQuestP() == 2) {
					System.out.println("Sailor: Thank you for bringing the captain back. We'll get to"
						+ "\n" + " work right away getting the boats up and running.");
					(map.getLocation(0,3)).setDir(3, true);
					playerCh.questProgressP();
				}
			}
			if(map.getPlayerX() == 1 && map.getPlayerY() == 1 && (playerCh.getQuestP() == 1)) {
				System.out.println("You look around a bit and find the captain fighting a Stone"
						+ "\n" + "Elemental. You better help her out. y/n");
				response = in.nextLine();
				if(response.compareTo("y") == 0) {
					result = battleground.fight(playerCh, stoneEle);
					if(result == 1) {
						System.out.println("Captain: Thanks for the help back there, " + playerCh.getName()
								+ "\n" + " Meet me at Port O'Call and I'll give you free"
								+ "\n" + " passage any time.");
						playerCh.questProgressP();
					}
					else if(result == 0) {
						System.out.println("You have to help her out of there.");
					}
					else if(result == -1) {
						System.out.println("You have fallen on your journey. Better luck next time.");
						break;
					}
				}
			}
			//stream blessing
			if(map.getPlayerX() == 2 && map.getPlayerY() == 0 && !bless) {
				System.out.println("The water here is crystal clear, and, as you drink from the"
					+ "\n" + "stream, it seems to cleanse and strengthen your body.");
				playerCh.buffHP(10);
				bless = true;
				
			}
			//giant's cave
			if(map.getPlayerX() == size-1 && map.getPlayerY() == size-1 && treasureG) {
				System.out.println("You enter the giant's cave and see food piled everywhere."
					+ "\n" + "I guess treasure means something different to"
					+ "\n" + "giants. You eat your fill and grab some for later.");
				System.out.println("There are some still useable items left in"
					+ "\n" + "here. You grab a full set of armor and a new weapon.");
				playerCh.buffAtt(.2);
				playerCh.buffHP(15);
				treasureG = false;
				playerCh.setHP(playerCh.getMaxHP());
			}
			//volcano
			if(map.getPlayerX() == 1 && map.getPlayerY() == 0) {
				System.out.println("Welcome to the final fight, " + playerCh.getName() + "!");
				System.out.println("Are you ready to fight " + boss.getName() + "? y/n");
				response = in.nextLine();
				if(response.compareTo("y") == 0) {
					result = battleground.fight(playerCh,  boss);
					if(result == 1) {
						System.out.println("Congratulations " + playerCh.getName() + "! You survived your journey."
								+ "\n" + "Unbeknownst to you, a hooded figure had been watching your journey"
								+ "\n" + "the whole time. As you finish the dragon, a large smile creeps"
								+ "\n" + "across their face.");
						break;
					}
					else if(result == 0) {
						System.out.println("Defeating " + boss.getName() + " is the only way to win.");
						System.out.println("Come back when you are ready.");
					}
					else {
						System.out.println("You have fallen on your journey. Better luck next time.");
						break;
					}
				}
			}
			place = map.getLocation(map.getPlayerX(), map.getPlayerY());
		}
		
		in.close();
		
		System.out.println("Hope you had fun. Come back and play a later version of the game.");
		System.out.println("End task.");
	}

}