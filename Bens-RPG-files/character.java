public class character {
	private String name;
	private int maxHP;
	private int hp;
	private int att;
	private int def;
	private int gold;
	private int lootT;
	private double lootA;
	private String openning;
	
	
	public character(){
		name = "0";
		maxHP = 1;
		hp = maxHP;
		att = 0;
		def = 0;
		gold = 0;
		lootT = 0;
		lootA = 0;
		openning = "0";
	}
	
	public character(String nam, int health, int attack, int defense, int gol, int lootTy, double lootAm, String open) {
		name = nam;
		maxHP = health;
		hp = health;
		att = attack;
		def = defense;
		gold = gol;
		lootT = lootTy;
		lootA = lootAm;
		openning = open;
	}
	
	//buffs and set values
	public void buffAtt(double buff) {
		att = (int)(att*(1+buff));
	}
	public void buffDef(double buff) {
		def = (int)(def*(1+buff));
	}
	public void buffHP(int newHP) {
		maxHP += newHP;
	}
	public int damage(int dam) {
		dam -= def;
		if(dam > 0) {
			hp -= dam;
			return dam;
		}
		hp -= 1;
		return 1;
	}
	public void setHP(int health) {
		hp = health;
	}
	
	//get values
	public String getName() {
		return name;
	}
	public int getHP() {
		return hp;
	}
	public int getMaxHP() {
		return maxHP;
	}
	public int getAtt() {
		return att;
	}
	public int getDef() {
		return def;
	}
	public int getGold() {
		return gold;
	}
	public int getLootT() {
		return lootT;
	}
	public double getLootA() {
		return lootA;
	}
	public String getOpen() {
		return openning;
	}
	
}
