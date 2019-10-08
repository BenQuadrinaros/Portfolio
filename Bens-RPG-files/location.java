import java.util.Scanner;

public class location {
	private String name;
	private boolean exitN;
	private boolean exitS;
	private boolean exitE;
	private boolean exitW;
	private character mob;
	private int mobDir;
	private Scanner in = new Scanner(System.in);
	private String invest;
	private boolean hasShop;
	private vendor shop;
	
	public location() {
		name = "0";
		exitN = false;
		exitS = false;
		exitE = false;
		exitW = false;
		mob = new character();
		mobDir = 0;
		invest = "0";
		hasShop = false;
		shop = new vendor();
	}
	public location(String nam, boolean n, boolean s, boolean e, boolean w, character mon, int dir, String inv, boolean hasS, vendor shp) {
		name = nam;
		exitN = n;
		exitS = s;
		exitE = e;
		exitW = w;
		mob = mon;
		mobDir = dir;
		invest = inv;
		hasShop = hasS;
		shop = shp;
	}
	
	public int choices(playerC playerCh) {
		boolean left = false;
		String response;
		int combatR;
		while(!left) {
			System.out.println();
			//movement choices
			System.out.println(playerCh.getName() + ", welcome to the " + name + ". Exit(s) are:");
			if(exitN) {
				System.out.println("North");
			}
			if(exitS) {
				System.out.println("South");
			}
			if(exitE) {
				System.out.println("East");
			}
			if(exitW) {
				System.out.println("West");
			}
			
			//movement blocking monsters
			if(mobDir == 1) {
				System.out.println("Blocking the path North is a " + mob.getName());
			}
			else if(mobDir == 2) {
				System.out.println("Blocking the path South is a " + mob.getName());
			}
			else if(mobDir == 3) {
				System.out.println("Blocking the path East is a " + mob.getName());
			}
			else if(mobDir == 4) {
				System.out.println("Blocking the path West is a " + mob.getName());
			}
			else {
				System.out.println("There are no monsters present.");
			}
			
			if(invest.compareTo("0") != 0) {
				System.out.println("There might be something of interest here.");
			}
			
			System.out.println("Please choose one of the following:");
			if(exitN) {
				System.out.println("1. Move North");
			}
			if(exitS) {
				System.out.println("2. Move South");
			}
			if(exitE) {
				System.out.println("3. Move East");
			}
			if(exitW) {
				System.out.println("4. Move West");
			}
			if(mobDir == 0) {
				System.out.println("5. Rest");
			}
			if(invest.compareTo("0") != 0) {
				System.out.println("6. Investigate");
			}
			System.out.println("7. Check " + playerCh.getName() + "'s Stats");
			if(hasShop) {
				System.out.println("8. Shop");
			}
			String choice = in.nextLine();
			//choice north
			if(choice.compareTo("1") == 0) {
				if(!exitN) {
					System.out.println("You can't leave here North.");
					continue;
				}
				else if(mobDir == 1) {
					System.out.println("You have to fight the " + mob.getName() + " to leave that way.");
					System.out.println("Proceed: y/n?");
					response = in.nextLine();
					if(response.compareTo("y") == 0) {
						combatR = fight(playerCh, mob);
						if(combatR == -1) {
							break;
						}
						else if(combatR == 0) {
							System.out.println("You run from the " + mob.getName() + ".");
							continue;
						}
						else {
							System.out.println("You beat the " + mob.getName() + " and move North.");
							mobDir = 0;
							return 1;
						}
					}
					else {
						continue;
					}
				}
				else {
					System.out.println("You leave the " + name + " to the North.");
					return 1;
				}
			}
			//choice south
			else if(choice.compareTo("2") == 0) {
				if(!exitS) {
					System.out.println("You can't leave here South.");
					continue;
				}
				else if(mobDir == 2) {
					System.out.println("You have to fight the " + mob.getName() + " to leave that way.");
					System.out.println("Proceed: y/n?");
					response = in.nextLine();
					if(response.compareTo("y") == 0) {
						combatR = fight(playerCh, mob);
						if(combatR == -1) {
							break;
						}
						else if(combatR == 0) {
							System.out.println("You run from the " + mob.getName() + ".");
							continue;
						}
						else {
							System.out.println("You beat the " + mob.getName() + " and move South.");
							mobDir = 0;
							return 2;
						}
					}
					else {
						continue;
					}
				}
				else {
					System.out.println("You leave the " + name + " to the South.");
					return 2;
				}
			}
			//choice east
			else if(choice.compareTo("3") == 0) {
				if(!exitE) {
					System.out.println("You can't leave here East.");
					continue;
				}
				else if(mobDir == 3) {
					System.out.println("You have to fight the " + mob.getName() + " to leave that way.");
					System.out.println("Proceed: y/n?");
					response = in.nextLine();
					if(response.compareTo("y") == 0) {
						combatR = fight(playerCh, mob);
						if(combatR == -1) {
							break;
						}
						else if(combatR == 0) {
							System.out.println("You run from the " + mob.getName() + ".");
							continue;
						}
						else {
							System.out.println("You beat the " + mob.getName() + " and move East.");
							mobDir = 0;
							return 3;
						}
					}
					else {
						continue;
					}
				}
				else {
					System.out.println("You leave the " + name + " to the East.");
					return 3;
				}
	
			}
			//choice west
			else if(choice.compareTo("4") == 0) {
				if(!exitW) {
					System.out.println("You can't leave here West.");
					continue;
				}
				else if(mobDir == 4) {
					System.out.println("You have to fight the " + mob.getName() + " to leave that way.");
					System.out.println("Proceed: y/n?");
					response = in.nextLine();
					if(response.compareTo("y") == 0) {
						combatR = fight(playerCh, mob);
						if(combatR == -1) {
							break;
						}
						else if(combatR == 0) {
							System.out.println("You run from the " + mob.getName() + ".");
							continue;
						}
						else {
							System.out.println("You beat the " + mob.getName() + " and move West.");
							mobDir = 0;
							return 4;
						}
					}
					else {
						continue;
					}
				}
				else {
					System.out.println("You leave the " + name + " to the West.");
					return 4;
				}
			}
			else if(choice.compareTo("5") == 0) {
				if(mobDir > 0) {
					System.out.println("You cannot rest while there are enemies nearby.");
				}
				else {
					System.out.println("You rest a while.");
					playerCh.setHP(playerCh.getMaxHP());
					System.out.println("Your health has been restored. Health remaining: " + playerCh.getHP());
				}
			}
			else if(choice.compareTo("6") == 0) {
				if(invest.compareTo("0") == 0) {
					System.out.println("There's nothing of interest...");
					continue;
				}
				else {
					System.out.println(invest);
					continue;
				}
			}
			else if(choice.compareTo("7") == 0) {
				System.out.println(playerCh.getName() + "'s Attack: " + playerCh.getAtt());
				System.out.println(playerCh.getName() + "'s Defense: " + playerCh.getDef());
				System.out.println(playerCh.getName() + "'s Max Health: " + playerCh.getMaxHP());
				System.out.println(playerCh.getName() + "'s Current Health: " + playerCh.getHP());
				System.out.println(playerCh.getName() + "'s Gold: " + playerCh.getGold());
				System.out.println("Press 1 to view the 'Quest Log'.");
					response = in.nextLine();
					if(response.compareTo("1") == 0) {
						if(playerCh.getQuestM() == 1) {
							System.out.println("\n" + "The Dragon: In Progress"
								+ "\n" + " The dragon which has been terrorizing Genesis Village is still at large. "
								+ "\n" + " They are counting on me to stop it. Apparantly, this dragon is especially "
								+ "\n" + " powerful. I should be completely ready when I fight it.");
						}
						if(playerCh.getQuestP() == 1) {
							System.out.println("\n" + "The Missing Captain: In Progress"
								+ "\n" + " Port O'Call has been temporarily shut down because of the missing captain."
								+ "\n" + " One of her deckhands told me that she was exploring an area called the"
								+ "\n" + " 'Mountain Crags'. I should look for her there.");
						}
						else if(playerCh.getQuestP() == 2) {
							System.out.println("\n" + "The Missing Captain: In Progress"
								+ "\n" + " Port O'Call has been temporarily shut down because of the missing captain."
								+ "\n" + " I found the captain and helped her fight a Stone Elemental. She has returned"
								+ "\n" + " to Port O'Call and has promised me free travel to the eastern islands.");
						}
						else if(playerCh.getQuestP() == 3) {
							System.out.println("\n" + "The Missing Captain: Completed"
								+ "\n" + " Port O'Call has returned to business with the return of the captain. She"
								+ "\n" + " promised me free travel to and from the eastern island chain from the port.");
						}
					}
				continue;
			}
			else if(choice.compareTo("8") == 0) {
				shop.viewItems();
				System.out.println("You have " + playerCh.getGold() + " Gold.");
				choice = in.nextLine();
				shop.buy(playerCh, choice);
			}
			else {
				System.out.println("Please enter a valid choice.");
				continue;
			}
		}
		return -1;
	}
	
	//fight method
	public int fight(playerC playerCh, character mob) {
		System.out.println("You've encountered a " + mob.getName() + ".");
		if(mob.getOpen().compareTo("0") != 0) {
			System.out.println(mob.getName() + ": " + mob.getOpen());
		}
		String response;
		int damage = 0;
		playerC temp = new playerC(playerCh.getName(), playerCh.getMaxHP(), playerCh.getAtt(), playerCh.getDef(), playerCh.getGold());
		character tempM = new character(mob.getName(), mob.getMaxHP(), mob.getAtt(), mob.getDef(), mob.getGold(), mob.getLootT(), mob.getLootA(), mob.getOpen());
		while(temp.getHP() > 0 && tempM.getHP() > 0) {
			System.out.println("Please choose an action:");
			System.out.println("1. Attack");
			System.out.println("2. Block");
			System.out.println("3. Focus");
			System.out.println("4. Flee");
			response = in.nextLine();
			if(response.compareTo("1") == 0) {
				if(Math.random() > .05) {
					damage = tempM.damage(temp.getAtt());
					System.out.println("You hit the the " + tempM.getName() + " for " + damage + " damage.");
					if(tempM.getHP() <= 0) {
						System.out.println("With a decisive blow, you end the fight.");
						continue;
					}
				}
				else {
					System.out.println("Your attack narrowly misses.");
				}
			}
			else if(response.compareTo("2") == 0) {
				System.out.println("You brace yourself for future attacks. *Defense up*");
				temp.buffDef(.2);
			}
			else if(response.compareTo("3") == 0) {
				System.out.println("You take a moment and analyze your opponents weaknesses. *Attack up*");
				temp.buffAtt(.2);
			}
			else if(response.compareTo("4") == 0) {
				if(Math.random() > .2) {
					System.out.println("You escape the battle.");
					mob.setHP(tempM.getHP());
					playerCh.setHP(temp.getHP());
					return 0;
				}
				else {
					System.out.println("Your escape is cut off.");
				}
			}
			else {
				System.out.println("Please select a valid option.");
				continue;
			}
			
			//Monster turn
			if(Math.random() > .35) {
				damage = temp.damage(tempM.getAtt());
				System.out.println("The " + tempM.getName() + " hits you for " + damage + " damage.");
				System.out.println("You have " + temp.getHP() + " health left.");
				continue;
			}
			else if(Math.random() > .3) {
				tempM.buffAtt(.2);
				System.out.println("Your opponent takes a moments to focus their attacks. *Attack up*");
				continue;
			}
			else if(Math.random() > .5) {
				tempM.buffDef(.2);
				System.out.println("Your opponent adopts a defensive stance. *Defense up*");
			}
			else {
				System.out.println("You nimbly dodge the attack.");
				continue;
			}
		}
		
		//combat results
		if(temp.getHP() <= 0) {
			return -1;
		}
		else {
			playerCh.setHP(temp.getHP());
			if(tempM.getLootT() == 1) {
				System.out.println("You enhance your weapon.");
				playerCh.buffAtt(tempM.getLootA());
			}
			else if(tempM.getLootT() == 2) {
				System.out.println("You enhance your shield.");
				playerCh.buffDef(tempM.getLootA());
			}
			else if(tempM.getLootT() == 3) {
				System.out.println("You enhance your armor.");
				playerCh.buffHP((int)tempM.getLootA());
			}
			else {
				System.out.println("The " + tempM.getName() + " drops nothing useful.");
			}
			playerCh.giveGold(tempM.getGold());
			System.out.println("You got " + tempM.getGold() + " Gold.");
			return 1;
		}
	}
	public void setDir(int dir, boolean tog) {
		if(dir == 1) {
			exitN = tog;
		}
		else if(dir == 2) {
			exitS = tog;
		}
		else if(dir == 3) {
			exitE = tog;
		}
		else if(dir == 4) {
			exitW = tog;
		}
	}
	public void setInv(String inv) {
		invest = inv;
	}
	
	//get methods
	public String getName() {
		return name;
	}
	public boolean checkN() {
		return exitN;
	}
	public boolean checkS() {
		return exitS;
	}
	public boolean checkE() {
		return exitE;
	}
	public boolean checkW() {
		return exitW;
	}
	public character getMob() {
		return mob;
	}
	public int getMobDir() {
		return mobDir;
	}

}
