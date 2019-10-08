public class vendor {
	
	private int item1C;
	private String item1N;
	private boolean item2;
	private int item2C;
	private String item2N;
	private boolean item3;
	private int item3C;
	private String item3N;
	
	public vendor() {
		item1C = 0;
		item1N = "0";
		item2 = false;
		item2C = 0;
		item2N = "0";
		item3 = false;
		item3C = 0;
		item3N = "0";
	}
	
	public vendor(int it1C, String it1N, boolean it2, int it2C, String it2N, boolean it3, int it3C, String it3N) {
		item1C = it1C;
		item1N = it1N;
		item2 = it2;
		item2C = it2C;
		item2N = it2N;
		item3 = it3;
		item3C = it3C;
		item3N = it3N;
	}
	
	public void viewItems() {
		System.out.println("We have the following items:");
		System.out.println("1. " + item1N + " *Health up* costs " + item1C + " Gold.");
		if(item2) {
			System.out.println("2. " + item2N + " *Attack up* costs " + item2C + " Gold.");
		}
		if(item3) {
			System.out.println("3. " + item3N + " *Defense up* costs " + item3C + " Gold.");
		}
		System.out.println("4. Exit");
	}
	public void buy(playerC playerCh, String choice) {
		if(choice.compareTo("1") == 0) {
			if(item1C > playerCh.getGold()) {
				System.out.println("You don't have enough Gold to buy that.");
			}
			else {
				playerCh.giveGold((-1)*(item1C));
				System.out.println("You spend " + item1C + " Gold on the " + item1N);
				playerCh.buffHP(3);
			}
		}
		else if(choice.compareTo("2") == 0) {
			if(item2C > playerCh.getGold()) {
				System.out.println("You don't have enough Gold to buy that.");
			}
			else {
				playerCh.giveGold((-1)*(item2C));
				System.out.println("You spend " + item2C + " Gold on the " + item2N);
				playerCh.buffAtt(.2);
				item2 = false;
			}
		}
		else if(choice.compareTo("3") == 0) {
			if(item3C > playerCh.getGold()) {
				System.out.println("You don't have enough Gold to buy that.");
			}
			else {
				playerCh.giveGold((-1)*(item3C));
				System.out.println("You spend " + item3C + " Gold on the " + item3N);
				playerCh.buffDef(.2);
				item3 = false;
			}
		}
		else
		{
			System.out.println("You exit the shop without buying anything.");
		}

	}
}
